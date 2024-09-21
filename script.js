document.addEventListener('DOMContentLoaded', function() {
    const params = new URLSearchParams(window.location.search);
    const commentId = params.get('id'); 

    if (commentId) {
        fetch('user_comments.json')
            .then(response => response.json())
            .then(data => {
                const comment = data[commentId]; 
                const commentElement = document.getElementById('comment');
                if (comment) {
                    commentElement.textContent = comment;  
                } else {
                    commentElement.textContent = ''; 
                }
            })
            .catch(error => {
                console.error('Error fetching comments:', error);
                document.getElementById('comment').textContent = 'Error fetching comment';
            });
    } else {
        document.getElementById('comment').textContent = 'No id provided in the URL';
    }
});
