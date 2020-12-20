# ReactJS_Base

ReactJS로 영화 웹 서비스 만들기(Nomadcoder)

주소 : [ReactJS로 영화 웹 서비스 만들기](https://nomadcoders.co/react-fundamentals)

### async, await(javascript)

- async, await : axios로 데이터를 가져오는 건 빠르지 않다. 그렇기에 데이터를 가져올 때까지 기다려달라고 요청할 필요가 있다. 이때 사용하는 것이 async, await이다.

```
getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
    );
    this.setState({ movies, isLoding: false });
  };
```

### url 동작 방식

![urlAction](./ReadmeImg/url_action_system.PNG)

- url이 동작하는 방식은 위의 이미지를 보면 /home, /home/introduction이 있는데 먼저 /home으로 들어가면 Home이란 글자가 보이고 /home/introduction으로 들어가면 Introductio만 보이는 것이 아닌 HomeIntroduction으로 보이는 것을 볼 수 있다. 그 이유는 url이 같은 이름을 가진 /home을 비교하여 같은 라우터가 있다면 그 뒤에 주소로 들어가 그 주소에 있는 내용도 같이 렌더링해주기 떄문이다.

- 이를 방지하기 위해 exact={true} 라는 옵션을 넣으면 된다.

```
<Route path="/" exact={true} component={Home} />
```

### componentDidmount()

- class component내에서 render가 실행되기 전에 (mount되기전에) 실행된다.

# Movie App 2020

React JS Fundamentals Course

- 결과 : [[Movie App]](https://kyeongmin-log.github.io/reactjs_base/)
- [수료증](https://nomadcoders.co/certs/fe3961a0-a3b6-4f49-889a-3d1bcfe0a270)
