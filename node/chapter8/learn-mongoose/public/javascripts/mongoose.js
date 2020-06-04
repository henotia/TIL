document.querySelectorAll('#user-list tr').forEach(el => {
  el.addEventListener('click', () => {
    const id = el.querySelector('td').textContent;
    alert(id);
    getComment(id);
  })
})

function getUser() {
  const xhr = new XMLHttpRequest();
  xhr.onload = function () {
    if (xhr.status === 200) {
      const users = JSON.parse(xhr.responseText);
      console.log(users);

      const tbody = document.querySelector('#user-list tbody');
      tbody.innerHTML = '';

      users.map(user => {
        const row = document.createElement('tr');
        row.addEventListener('click', () => {
          const input = document.querySelector('#userid');
          input.value = user._id;
          getComment(user._id);
        });
        let td = document.createElement('td');
        td.textContent = user._id
        row.appendChild(td);

        td = document.createElement('td');
        td.textContent = user.name;
        row.appendChild(td);

        td = document.createElement('td');
        td.textContent = user.age;
        row.appendChild(td);

        td = document.createElement('td');
        td.textContent = user.married ? '기혼' : '미혼';
        row.appendChild(td);

        tbody.appendChild(row);
      });
    } else {
      console.error(xhr.responseText);
    }
  }

  xhr.open('GET', '/users');
  xhr.send();
}

function getComment(id) {
  const xhr = new XMLHttpRequest();
  xhr.onload = function () {
    if (xhr.status === 200) {
      const comments = JSON.parse(xhr.responseText);
      const tbody = document.querySelector('#comment-list tbody');

      tbody.innerHTML = '';

      comments.map(comment => {
        const row = document.createElement('tr');

        let td = document.createElement('td');
        td.textContent = comment._id
        row.appendChild(td);

        td = document.createElement('td');
        td.textContent = comment.commenter.name;
        row.appendChild(td);

        td = document.createElement('td');
        td.textContent = comment.comment;
        row.appendChild(td);

        const edit = document.createElement('button');
        edit.textContent = '수정';
        edit.addEventListener('click', () => {
          const newComment = prompt('바꿀 내용을 입력하세요');
          if (!newComment) { return; }
          const editXhr = new XMLHttpRequest();
          if (editXhr.status === 200) {
            console.log(editXhr.responseText);
            getComment(id);
          } else {
            console.error(editXhr.responseText);
          }

          editXhr.open('PATCH', '/comments/' + comment._id);
          editXhr.setRequestHeader('Content-Type', 'application/json');
          editXhr.send(JSON.stringify({comment: newComment}));
        })

        const remove = document.createElement('button');
        remove.textContent = '삭제';
        remove.addEventListener('click', () => {
          const removeXhr = new XMLHttpRequest();
          if (removeXhr.status === 200) {
            console.log(xhr.responseText);
            getComment(id);
          } else {
            console.error(removeXhr.responseText);
          }

          removeXhr.open('DELETE', '/comments/' + comment._id);
          removeXhr.send();
        });

        td = document.createElement('td');
        td.appendChild(edit);
        row.appendChild(td);

        td = document.createElement('td');
        td.appendChild(remove);
        row.appendChild(td);
        tbody.appendChild(row);
      })
    } else {
      console.error(xhr.responseText);
    }
  }
  xhr.open('GET', '/comments/' + id);
  xhr.send();
}

document.getElementById('user-form').addEventListener('submit', e => {
  e.preventDefault();
  const name = e.target.username.value;
  const age = e.target.age.value;
  const married = e.target.married.checked;

  if (!name) { return; }
  if (!age) { return; }

  const xhr = new XMLHttpRequest();
  xhr.onload = function () {
    if (xhr.status === 201) {
      console.log(xhr.responseText);
      getUser();
    } else {
      console.error(xhr.responseText);
    }
  }
  xhr.open('POST', '/users');
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send(JSON.stringify({name: name, age: age, married: married}));
  e.target.username.value = '';
  e.target.age.value = '';
  e.target.married.checked = false;
});

document.getElementById('comment-form').addEventListener('submit', e => {
  e.preventDefault();
  const id = e.target.userid.value;
  const comment = e.target.comment.value;

  if (!id) { return; }
  if (!comment) { return; }

  const xhr = new XMLHttpRequest();
  xhr.onload = function () {
    if (xhr.status === 201) {
      console.log(xhr.responseText);
      getComment(id);
    } else {
      console.error(xhr.responseText);
    }
  }

  xhr.open('POST', '/comments');
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send(JSON.stringify({id: id, comment: comment}));
  e.target.userid.value = '';
  e.target.comment.value = '';
});
