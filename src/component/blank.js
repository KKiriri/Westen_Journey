import React from 'react';


const styles = ({
  container: {
    padding: '1 px',
    display: 'flex',
    flexWrap: 'wrap',
    fontColor: 'red',
  },

  dense: {
    marginTop: 16,
  },
  menu: {
    width: 500,
  },
});


const Blank = ({history}) => (


    <div >
      <div >
      Hello
      </div>

    <button onClick={() => history.push("/to1") }> Click </button>
    </div>
);


class fk extends React.Component {
  // ...
  render() {
    return (
      <div style={styles}>
        dasdjasi
      </div>
    )
  }
}

export default Blank;
