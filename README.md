# Tomato Timer

Learning Redux By Making Timer App

## To use Redux
1. install redux
2. install react-redux
<pre><code>
npm install redux react-redux --save
</code></pre>


## What is Redux
1. State Management for Redux
2. 컴포넌트 state를 저장한 박스와 같은 존재
3. state의 DB를 갖는 것

### Why do we need?
- 컴포넌트는 local state, 앱은 global state를 가진다.
- 유저가 로그인 했는지 안했는지 여부를 모든 컴포넌트가 알기를 원한다. -> 따라서 공유하고 싶음.
- 리덕스는 global shared state를 저장하는 것으로 'Redux' = 'State Container' 이다.

### When don't need redux => Building a Blog
1. Calls an API(getPosts)
2. render <Post /> Component
3. render <Comment /> Component

### Replying on a Post
- sendComment(whoami, which comment)

### When we need redux => 블로그
1. Calls an API(getPosts, getUsers)
2. render <Post /> Component
3. render <Comment /> Component
> 이렇게 되면 The **flying prop**이 발생됨. 유저 식별을 위해 Prop으로 계속전해지지만 Post에서는 해당 UserId 가 안쓰이는 현상! 
다시 말하면, 이는 모든 정보를 Container에 담고 있는 뜻이 되므로 좋지 않다.

## Stuff to remember
- The whole state of your app is stored in an object(store)
- if you want to change thd data inside of this object you need to 'dispatch'(send) an action
- You will send this actions to a **reducer** and this reducer will change the object for you.