import csv
import midiutil
import numpy
from scipy import stats
from datetime import datetime

# # DATA VARIABLES
shapes = ['circle', 'disk', 'unknown', 'other', 'triangle', 'cigar', 'light', 'sphere', 'fireball', 'oval', 'diamond', 'changing', 'formation', 'flash', 'cylinder', 'chevron', 'rectangle', 'cross', 'egg', 'teardrop', 'cone']

# # FILE VARIABLES
csv_input = '../data/ufo_small.csv'
midi_output = '../midi_folder/ufo_by_sighting.mid'

# # FUNCTION TO CREATE A MAPPING FOR NOTE DURATION
# # BASED ON LENGTH OF UFO SIGHTING
def get_duration(val, duration_stats):
    possible_beats = [0.5, 1, 1.5, 2]
    if val <= duration_stats['mean']/2:
        duration = possible_beats[0]
    if val > duration_stats['mean']/2 and val <= duration_stats['mean']:
        duration = possible_beats[1]
    if val > duration_stats['mean'] and val <= duration_stats['mean'] + duration_stats['mean']/2:
        duration = possible_beats[2]
    if val > duration_stats['mean'] + duration_stats['mean']/2:
        duration = possible_beats[3]
    return duration

# # FUNCTION TO CREATE A MAPPING FOR NOTE PITCH
# # BASED ON SHAPE OF UFO 
def get_note(val):
    major_scale = [60, 62, 64, 65, 67, 69, 71]
    minor_scale = [60, 62, 63, 65, 67, 68, 70]
    scale = minor_scale
    if 'circle' in val:
        return scale[1]
    if 'disk' in val:
        return scale[2]
    if 'triangle' in val:
        return scale[3]
    if 'light' in val:
        return scale[4]
    if 'formation' in val:
        return scale[5]
    if 'fireball' in val:
        return scale[6]
    else:
        return scale[0]

def save_midi(midi_file):
    filename = midi_output
    with open(filename, 'wb') as output_file:
        midi_file.writeFile(output_file)
        print 'midi file saved'

# # CHECKS TO SEE IF THERE IS MENTION OF A VOICE OR TALKING IN THE DESCRIPTION
def check_for_voice(description):
    if 'talk' in description or 'voice' in description or 'said' in description or 'say' in description:
        return True
    else:
        return False

# # GETS BASIC STATS FOR A CERTAIN ROW (VARIABLE)
# # IN THIS CASE, THE DURATION OF THE UFO SIGHTING
def get_stats(reader, row_num):
    val_list = []
    for row in reader:
        if not '.' in row[row_num]:
            val_list.append(int(row[row_num]))
        else:
            val_list.append(round(float(row[row_num])))
    stdev = numpy.std(val_list)
    mean = numpy.mean(val_list)
    median = numpy.median(val_list)
    mode = stats.mode(val_list)
    return {
        "mean": mean, 
        "median": median, 
        "mode": mode[0],
        "stdev": stdev
    }

def compose_midi(all_sightings, duration_stats):
    track = 0
    channel = 0
    time = 0 # in beats
    tempo = 160  # beats per minute
    volume = 100 # from 0-127
    program = 0 # Midi instrument

    midi_file = midiutil.MIDIFile(1, adjust_origin=False)
    midi_file.addTempo(track, time, tempo)
    midi_file.addProgramChange(track, channel, time, program)
    midi_file.addProgramChange(track, channel+1, time, 52)
    for row in all_sightings:
        #duration = 1
        duration = get_duration(round(float(row[5])), duration_stats) # duration is in beats
        note = get_note(row[4])
        if check_for_voice(row[7]) == True:
            midi_file.addNote(track, channel+1, note, time, 2, volume)
        midi_file.addNote(track, channel, note, time, duration, volume)        
        time = time + duration
    save_midi(midi_file)

# # FORMATS THE DATE
def clean_date(date):
    formatted_date = date.split(' ')[0].split('/')
    if len(formatted_date[0]) == 1:
        formatted_date[0] = '0' + formatted_date[0]
    if len(formatted_date[1]) == 1:
        formatted_date[1] = '0' + formatted_date[1]
    formatted_date = '/'.join(formatted_date)
    return formatted_date

# # ORDERS THE DATA BY DATE
def clean_data(reader):
    data = sorted(reader, key = lambda row: datetime.strptime(clean_date(row[0]), "%m/%d/%Y"))
    return data

with open(csv_input, 'rb') as csvfile:
    reader = csv.reader(csvfile, quotechar='"')
    all_sightings = []
    for row in reader:
        all_sightings.append(row)
    all_sightings = clean_data(all_sightings)
    duration_stats = get_stats(all_sightings, 5)
    print duration_stats
    compose_midi(all_sightings, duration_stats)

