let rerenderEntireTree = () =>{
    console.log('state chenge')
}

let state = {
    profilePage:{
        postData: [
            { id: 1, messages: 'Hello world', likeCount: 5 },
            { id: 2, messages: 'My name is Vadim', likeCount: 7 },
            { id: 3, messages: 'i like js', likeCount: 100 }
        ],


        descData:{id:1, desc:'may name is vadim i js developer'},

        newPostText:'it-kamasutra'

        
       
    },


    
    dialogsPage:{
        messagesData: [
            { id: 1, messages: 'hello world' },
            { id: 2, messages: 'my name is ' },
            { id: 3, messages: 'yo' },
            { id: 4, messages: 'yo' },
            { id: 5, messages: 'yo' },
            { id: 6, messages: 'yo' }
        ],

        dialogsData: [
            { id: 1, name: 'Vadim', avatar: 'https://www.blexar.com/avatar.png' },
            { id: 2, name: 'Dimych', avatar: 'https://www.blexar.com/avatar.png' },
            { id: 3, name: 'Andrey', avatar: 'https://www.blexar.com/avatar.png' },
            { id: 4, name: 'Lexa', avatar: 'https://www.blexar.com/avatar.png' },
            { id: 5, name: 'Ivan', avatar: 'https://www.blexar.com/avatar.png' },
            { id: 6, name: 'Petya', avatar: 'https://www.blexar.com/avatar.png' }
        ], 

        
    }
    
}


export let addPost = () =>{
    debugger;
    let newPost  = {
        id: 5,
        messages: state.profilePage.newPostText = '',
        likeCount: 0
    };

    state.profilePage.postData.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}

export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}



export default state