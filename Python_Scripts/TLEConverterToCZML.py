import tle2czml
from datetime import datetime, timedelta

def process_tle_file(filepath):
    start_time = datetime.utcnow()
    end_time = start_time + timedelta(hours=24)

    tle2czml.create_czml(
        filepath,
        start_time=start_time,
        end_time=end_time,
        outputfile_path="output.czml"
    )

if __name__ == "__main__":

    # Specify the path to your TLE file
    file_path = "./STARLINK.txt"
    process_tle_file(file_path)







