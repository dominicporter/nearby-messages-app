const LocationEntryBox = ({
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
      flexDirection: 'row', // Display inputs in a row
      alignItems: 'center',
      justifyContent: 'space-between', // Space evenly between inputs
      marginBottom: '10px', // Add margin for spacing
    },
    input: {
      flex: 1, // Distribute available space evenly between inputs
    //   margin: '10px', // Add spacing between inputs
    //   padding: '10px', // Add some padding for readability
    },
  };
  
export default LocationEntryBox;