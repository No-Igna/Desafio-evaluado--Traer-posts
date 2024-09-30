const getPosts = async () =>{
  try{
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    if(!response.ok){
      throw new Error(`Error: ${response.status}`);
    }
    const posts = await response.json();
    const postData = document.getElementById('post-data');
    const unorderedList=document.createElement('ul');
    postData.appendChild(unorderedList);
    posts.forEach(post =>{
      const listItem=document.createElement('li');
      listItem.innerHTML=`
        <h3>${post.title}</h3>
        <p>${post.body}</p>
      `;
      unorderedList.appendChild(listItem);
    });
  }catch(error){
    console.log('Error en la solicitud:', error);
  }
};
