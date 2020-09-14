let messages = [
    {
        name: "Jack Deng",
        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a nunc non dui congue porttitor vitae ut libero. Nam egestas magna quis ligula blandit iaculis. Donec ac sem eu erat ornare porta",
    }
];

let postButton = document.getElementById("post-button");
postButton.addEventListener("click", function (e) {
    e.preventDefault();
    let messageName = document.getElementById("message-name").value;
    let messageBlock = document.getElementById("message-block").value;
    let newMessage = {
        name: messageName,
        comment: messageBlock
    };
    comments.unshift(newMessage);
    document.getElementById("guestbook-messages").innerHTML = '';
    document.getElementById("message-name").value = '';
    document.getElementById("message-block").value = '';
    createComments(comments);
});

function createMessage(messageObject) {
    let displayMessage = document.getElementById("guestbook-message");
    let newMessageDiv = document.createElement("div");
    let newMessageH5 = document.createElement("h5");
    newMessageH5.classList.add("guestbook-message");
    let newMessageP = document.createElement("p");
    newMessageP.classList.add("message-p");
    newMessageDiv.appendChild(newMessageH5);
    newMessageDiv.appendChild(newMessageP);
    displayMessage.appendChild(newMessageDiv);
    newMessageH5.innerHTML = messagetObject.name;
    newMessageP.innerHTML = messageObject.comment;
}

function createMessages(messagesArray) {
    for (let i = 0; i < messagesArray.length; i++) {
        createMessage(messagesArray[i]);
    }
};


createMessages(messages);
