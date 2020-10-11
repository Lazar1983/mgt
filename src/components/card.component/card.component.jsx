import React from 'react';

class CardPage extends React.Component {
  
    componentDidMount() {
        const apiUrl = 'https://api.magicthegathering.io/v1/cards?random=true&pageSize=100&language=English';
        fetch(apiUrl)
          .then((response) => response.json())
          .then((data) => console.log('This is your data', data));
      }
  
    render() {
        return (
            <div>Card is loaded in console.log</div>
        )
    }
  }


  export default CardPage;