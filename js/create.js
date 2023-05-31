// javascript for create.html

const form = document.querySelector('form')

const createPost = async (e) => {
    e.preventDefault()

    const document = {
        title: form.title.value,
        body: form.body.value,
        likes: 0
    }

    await fetch('http://localhost:3000/posts', {
        headers: {'Content-Type': 'application/json'},
        method: 'POST',
        body: JSON.stringify(document)
    })

    window.location.replace('/index.html')
}

form.addEventListener('submit', createPost)

