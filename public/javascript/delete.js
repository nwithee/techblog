const deletePostHandler = async function(event) {
    console.log("clicked", event)
    event.preventDefault();
    const post_id = document.getElementById('post-id')

    fetch("/api/posts/" + post_id.value, {
        method: "delete"
    })
    .then(function() {
        document.location.replace("/dashboard");
    })
    .catch(err => console.log(err))
}

document.querySelector("#delete-btn").addEventListener("click", deletePostHandler);