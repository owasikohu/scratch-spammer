let messege = prompt("メッセージを入力");
alert(messege);
let studio = prompt("スタジオのidを入力");
alert(studio);
let url = "https://api.scratch.mit.edu/proxy/comments/studio/" + studio,
  countlimit = prompt("送信回数を入力"),
  body = `{"content":"${messege}","parent_id":"","commentee_id":""}`,
  x = 0;
for (; x < countlimit;) x += 1, fetch(url, {
  headers: {
    "content-type": "application/json",
    "x-csrftoken": scratchAddons.globalState.auth.csrfToken,
    "x-token": scratchAddons.globalState.auth.xToken
  },
  body: body,
  method: "POST",
  credentials: "include"
});
