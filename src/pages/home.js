import React from "react";

const styles = {
  imageStyle: {
width: 1228,
height: 623,
marginLeft: 40
    
  }
};


function Home() {
  return (
    <div>
      <img class="img-fluid mt-2" style={styles.imageStyle} src="../images/dome.svg" alt="picture of the top of Joeys head"></img>
    </div>
  );
}


export default Home;