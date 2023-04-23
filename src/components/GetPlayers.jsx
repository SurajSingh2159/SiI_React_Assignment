import React, { useContext, useState } from 'react'
import PlayersContext from '../context/PlayersContext'
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const GetPlayers = () => {
      const a = useContext(PlayersContext)
      // console.log("a", a);

      const[query, setQuery] = useState("");
      
      //"/player-images/"+ele.Id+".jpg"
  return (
      <>
      <div style={{display: 'flex', justifyContent: 'center', alignContent: 'center', marginTop: '10px'}}>
      <label for="gsearch" >Search Players: </label>
       <input type="text" className="search" placeholder="search..." onChange={(e)=>setQuery(e.target.value)}></input>
       </div>
      <h1 className="text-center" style={{margin: '1px 0px', marginTop: '40px'}}>Players List</h1>
      <Row>
      {a.data && a.data.filter((user)=>user.TName.toLowerCase().includes(query)|| user.PDName.toLowerCase().includes(query.toLowerCase())).map((ele)=>{
            return (
                  <Col className="col-4 my-3">
                    <Card className="playerlist">
                      <Card.Img variant="top" src={("/player-images/"+ele.Id+".jpg")} />
                      <Card.Body>
                        <Card.Title>{ele.PFName}</Card.Title>
                        <Card.Text>${ele.Value} million</Card.Text>
                        <Card.Text>Upcoming Match:- {ele.UpComingMatchesList[0].CCode} vs {ele.UpComingMatchesList[0].VsCCode}</Card.Text>
                        <Card.Text>Upcoming Match Time:- {a.fromUTCToLocal(ele.UpComingMatchesList[0].MDate)}</Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                );
      })}   
    </Row>
    </>
  )
}

export default GetPlayers
