let state = {
    posts: [
        { id: 1, text: "post 1", likesCount: 1 },
        { id: 2, text: "post 2", likesCount: 2 },
        { id: 3, text: "post 3", likesCount: 3 },
        { id: 4, text: "post 4", likesCount: 4 },
    ],

    messages: [
        { id: 1, message: "hey 1" },
        { id: 2, message: "hey 2" },
        { id: 3, message: "hey 3" },
        { id: 4, message: "hey 4" },
        { id: 5, message: "hey 5" },
        { id: 6, message: "hey 6" },
    ],

    dialogs: [
        { id: 1, name: "Sveta" },
        { id: 2, name: "Andrey" },
        { id: 3, name: "Dima" },
        { id: 4, name: "Vitalya" },
        { id: 5, name: "Roma" },
        { id: 6, name: "Kolya" },
    ],
};

export let addPost = (postText:string)=>{
    let newPost = {
        id:7,
        text:postText,
        likesCount:0
    }

    state.posts.push(newPost);
    alert(postText);
    console.log(state.posts);
}

export let sendMessage = (messageText: string)=>{
    let newMessage = {
        id:7,
        message:messageText
    }

    state.messages.push(newMessage);
    alert(messageText);
    console.log(state.messages);
}

export default state;