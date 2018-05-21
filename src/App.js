import React from 'react';
import axios from 'axios';
import ImageList from './components/imageList';
import './App.css';
 

class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
            imgs: []
        };
    }

    componentDidMount() {
        this.imageSearch();
    }

    imageSearch(query = 'office') { 
        axios
            .get(
              `https://api.unsplash.com/photos/?client_id=c13f82a56ccd0d779319090b8a02e69f40cabcb0a96f8f5003e78910d77da6bf&per_page=25`
            )
            .then(data => {
              this.setState({ imgs: data.data });
            })
            .catch(err => {
              console.log('Error happened during fetching!', err);
            });
    }

    render() {
        return (
            <div className="main">
                <ImageList data={this.state.imgs} />
            </div>
        );
    }
    
}
 
export default App;