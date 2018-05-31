import React,{Component} from 'react';

const API = 'AIzaSyAOYG1Ai4mZy6L-ifZgQ8bzS87vA6v3JdA';
const channelId = 'UCXuO_AmrcE16fDoNiq9JZZg';
const res = 10;
var finalUrl = `https://www.googleapis.com/youtube/v3/search?key=${API}&channelId=${channelId}&&part=snippet,id&order=date&maxResults=${res}`

export default class Youtube extends Component {

  clicked() {
    fetch(finalUrl)
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson)
        const result = responseJson.items.map(obj=> "https://www.youtube.com/embed/"+obj.id.videoId);
        this.setState({result})
        console.log(this.state.result)
      })
      .catch((error) => {
        console.error(error);
      });
  }

    componentWillMount() {
      fetch(finalUrl)
        .then((response) => response.json())
        .then((responseJson) => {
          console.log(responseJson)
          const result = responseJson.items.map(obj=> "https://www.youtube.com/embed/"+obj.id.videoId);
          this.setState({result})
          console.log(this.state.result)
        })
        .catch((error) => {
          console.error(error);
        });
    }
    constructor(props){
      super(props);

      this.state = {
        result:[]
      };
      this.clicked = this.clicked.bind(this)
    }

    render() {
      console.log(finalUrl)
        return (
          <div>
              <button onClick={this.clicked}> Get youtube videos</button>
              {this.state.result.map((link,i)=>{
                console.log(link)
                var frame = <div key = {i} className="youtube"><iframe  width="560" height="315" src={link} frameBorder="0" allowFullScreen></iframe></div>
                return frame
              })
            }
                {this.frame}
              <iframe width="560" height="315" src="https://www.youtube.com/embed/itdTtu9heSU" frameBorder="0" allowFullScreen></iframe>

            </div>
        );
    }
}
