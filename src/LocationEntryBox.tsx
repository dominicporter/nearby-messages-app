import React from 'react';

interface LocationEntryBoxProps {
  latitude: string;
  setLatitude: React.Dispatch<React.SetStateAction<string>>;
  longitude: string;
  setLongitude: React.Dispatch<React.SetStateAction<string>>;
}

const LocationEntryBox: React.FC<LocationEntryBoxProps> = ({
  latitude,
  setLatitude,
  longitude,
  setLongitude,
}) => {
  return (
    <div style={styles.container}>
      <div style={styles.input}>
        <label>Latitude:</label>
        <input
          type='text'
          value={latitude}
          onChange={(e) => setLatitude(e.target.value)}
        />
      </div>
      <div style={styles.input}>
        <label>Longitude:</label>
        <input
          type='text'
          value={longitude}
          onChange={(e) => setLongitude(e.target.value)}
        />
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row' as 'row', // Explicitly specify type
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '10px',
  },
  input: {
    flex: 1,
  },
};

export default LocationEntryBox;
