document.addEventListener('DOMContentLoaded', function() {
    const params = new URLSearchParams(window.location.search);
    const commentId = params.get('id'); 

    if (commentId) {
        fetch('user_comments.json') 
            .then(response => response.json()) 
            .then(data => {
                const fullComment = data[commentId];
                const commentElement = document.getElementById('comment');
                if (fullComment) {
                    const subscriptionMatch = fullComment.match(/subscription period: ([^;]*)/);
                    let displayText = 'Subscription Period: Not Specified';
                    if (subscriptionMatch && subscriptionMatch[1]) {
                        displayText = `Subscription Period: ${subscriptionMatch[1]}`;
                    }
                    commentElement.textContent = displayText;
                } else {
                    commentElement.textContent = 'Did not find comment';
                }
            })
            .catch(error => {
                console.error('Error fetching comments:', error);
                document.getElementById('comment').textContent = 'Error fetching comment';
            });
    } else {
        document.getElementById('comment').textContent = 'No id';
    }
});
