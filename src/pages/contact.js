import React from 'react';
import Desk from "../images/desk.jpg";

const styles = {
    imageStyle: {
        backgroundImage: `url(${Desk})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "85vh"
    },
    formArea: {
        margin: "auto",
        width: "65%",
        paddingTop: 100,
        paddingLeft: 185
    },
    labelStyle: {
        color: "white",
    },
    buttonStyle: {
        backgroundColor: "#c44051",
        color: "white"
    }

};




const contact = () => {
    return (
        <div style={styles.imageStyle}>
            <div style={styles.formArea}>
                <form class="w-75">
                    <div class="form-group">
                        <label style={styles.labelStyle} for="nameInput">Name</label>
                        <input type="text" class="form-control" id="nameInput" placeholder="John Smith"
                            title="Please enter your first and last name"></input>
                    </div>
                    <div class="form-group">
                        <label style={styles.labelStyle} for="emailAddressInput">Email</label>
                        <input type="email" class="form-control" id="emailAddressInput" placeholder="name@example.com"
                            title="Please enter your email address"></input>
                    </div>
                    <div class="form-group">
                        <label style={styles.labelStyle} for="messageTextAreaInput">Message</label>
                        <textarea class="form-control" id="messageTextAreaInput" rows="5"></textarea>
                    </div>
                    <button style={styles.buttonStyle} type="submit" class="btn theme-submit float-right" placeholder="Enter you message here"
                        title="Please enter your message">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default contact
