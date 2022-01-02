import React, {useEffect, useState} from 'react';
import './App.css';
import ChessPiece from "./components/ChessPiece";
import {HTML5Backend} from "react-dnd-html5-backend";
import {DndProvider} from "react-dnd";
import {io} from 'socket.io-client'

function App() {
  console.log('hello');

  const socket = io("ws://localhost:3005");

  socket.on("connect", () => {
    socket.send("Hello, from client 1!");

    // or with emit() and custom event names
    if(socket.connected) {
      socket.emit("salutations", "Hello 1!", { "mr": "john" }, Uint8Array.from([1, 2, 3, 4]));
    }
  });

  socket.send('Sending a new game request')
  socket.emit('createGame', 'Game1');
  socket.on('newUser', (...args: any) => console.log(args))

// handle the event sent with socket.send()
  socket.on("message", (data: any) => {
    console.log('data: ', data);
  });

// handle the event sent with socket.emit()
  socket.on("greetings", (elem1: any, elem2: any, elem3: any) => {
    console.log(elem1, elem2, elem3);
  });

  return (
      <DndProvider backend={HTML5Backend}>
        <div className={"flex h-screen"}>
          <div className={"m-auto"}>
            <div className="flex">
              <div className={"bg-gray-600 box-border h-24 w-24 flex-none flex"}>
                <ChessPiece></ChessPiece>
              </div>
              <div className={"bg-gray-200 box-border h-24 w-24 flex-none"}>
                <img src={'pieces/b_queen.png'}/>
              </div>
              <div className={"bg-gray-600 box-border h-24 w-24 flex-none"}>
                <ChessPiece></ChessPiece>
              </div>
              <div className={"bg-gray-200 box-border h-24 w-24 flex-none"}>
                <ChessPiece></ChessPiece>
              </div>
              <div className={"bg-gray-600 box-border h-24 w-24 flex-none"}>5</div>
              <div className={"bg-gray-200 box-border h-24 w-24 flex-none"}>6</div>
              <div className={"bg-gray-600 box-border h-24 w-24 flex-none"}>7</div>
              <div className={"bg-gray-200 box-border h-24 w-24 flex-none"}>8</div>
            </div>
            <div className="flex">
              <div className={"bg-gray-200 box-border h-24 w-24 flex-none"}>9</div>
              <div className={"bg-gray-600 box-border h-24 w-24 flex-none"}>10</div>
              <div className={"bg-gray-200 box-border h-24 w-24 flex-none"}>11</div>
              <div className={"bg-gray-600 box-border h-24 w-24 flex-none"}>12</div>
              <div className={"bg-gray-200 box-border h-24 w-24 flex-none"}>13</div>
              <div className={"bg-gray-600 box-border h-24 w-24 flex-none"}>14</div>
              <div className={"bg-gray-200 box-border h-24 w-24 flex-none"}>15</div>
              <div className={"bg-gray-600 box-border h-24 w-24 flex-none"}>16</div>
            </div>
            <div className="flex">
              <div className={"bg-gray-600 box-border h-24 w-24 flex-none"}>17</div>
              <div className={"bg-gray-200 box-border h-24 w-24 flex-none"}>18</div>
              <div className={"bg-gray-600 box-border h-24 w-24 flex-none"}>19</div>
              <div className={"bg-gray-200 box-border h-24 w-24 flex-none"}>20</div>
              <div className={"bg-gray-600 box-border h-24 w-24 flex-none"}>21</div>
              <div className={"bg-gray-200 box-border h-24 w-24 flex-none"}>22</div>
              <div className={"bg-gray-600 box-border h-24 w-24 flex-none"}>23</div>
              <div className={"bg-gray-200 box-border h-24 w-24 flex-none"}>24</div>
            </div>
            <div className="flex">
              <div className={"bg-gray-200 box-border h-24 w-24 flex-none"}>25</div>
              <div className={"bg-gray-600 box-border h-24 w-24 flex-none"}>26</div>
              <div className={"bg-gray-200 box-border h-24 w-24 flex-none"}>27</div>
              <div className={"bg-gray-600 box-border h-24 w-24 flex-none"}>28</div>
              <div className={"bg-gray-200 box-border h-24 w-24 flex-none"}>29</div>
              <div className={"bg-gray-600 box-border h-24 w-24 flex-none"}>30</div>
              <div className={"bg-gray-200 box-border h-24 w-24 flex-none"}>31</div>
              <div className={"bg-gray-600 box-border h-24 w-24 flex-none"}>32</div>
            </div>
            <div className="flex">
              <div className={"bg-gray-600 box-border h-24 w-24 flex-none"}>33</div>
              <div className={"bg-gray-200 box-border h-24 w-24 flex-none"}>34</div>
              <div className={"bg-gray-600 box-border h-24 w-24 flex-none"}>35</div>
              <div className={"bg-gray-200 box-border h-24 w-24 flex-none"}>36</div>
              <div className={"bg-gray-600 box-border h-24 w-24 flex-none"}>37</div>
              <div className={"bg-gray-200 box-border h-24 w-24 flex-none"}>38</div>
              <div className={"bg-gray-600 box-border h-24 w-24 flex-none"}>39</div>
              <div className={"bg-gray-200 box-border h-24 w-24 flex-none"}>40</div>
            </div>
            <div className="flex">
              <div className={"bg-gray-200 box-border h-24 w-24 flex-none"}>41</div>
              <div className={"bg-gray-600 box-border h-24 w-24 flex-none"}>42</div>
              <div className={"bg-gray-200 box-border h-24 w-24 flex-none"}>43</div>
              <div className={"bg-gray-600 box-border h-24 w-24 flex-none"}>44</div>
              <div className={"bg-gray-200 box-border h-24 w-24 flex-none"}>45</div>
              <div className={"bg-gray-600 box-border h-24 w-24 flex-none"}>46</div>
              <div className={"bg-gray-200 box-border h-24 w-24 flex-none"}>47</div>
              <div className={"bg-gray-600 box-border h-24 w-24 flex-none"}>48</div>
            </div>
            <div className="flex">
              <div className={"bg-gray-600 box-border h-24 w-24 flex-none"}>49</div>
              <div className={"bg-gray-200 box-border h-24 w-24 flex-none"}>50</div>
              <div className={"bg-gray-600 box-border h-24 w-24 flex-none"}>51</div>
              <div className={"bg-gray-200 box-border h-24 w-24 flex-none"}>52</div>
              <div className={"bg-gray-600 box-border h-24 w-24 flex-none"}>53</div>
              <div className={"bg-gray-200 box-border h-24 w-24 flex-none"}>54</div>
              <div className={"bg-gray-600 box-border h-24 w-24 flex-none"}>55</div>
              <div className={"bg-gray-200 box-border h-24 w-24 flex-none"}>56</div>
            </div>
            <div className="flex">
              <div className={"bg-gray-200 box-border h-24 w-24 flex-none"}>57</div>
              <div className={"bg-gray-600 box-border h-24 w-24 flex-none"}>58</div>
              <div className={"bg-gray-200 box-border h-24 w-24 flex-none"}>59</div>
              <div className={"bg-gray-600 box-border h-24 w-24 flex-none"}>60</div>
              <div className={"bg-gray-200 box-border h-24 w-24 flex-none"}>61</div>
              <div className={"bg-gray-600 box-border h-24 w-24 flex-none"}>62</div>
              <div className={"bg-gray-200 box-border h-24 w-24 flex-none"}>63</div>
              <div className={"bg-gray-600 box-border h-24 w-24 flex-none"}>64</div>
            </div>
          </div>
        </div>
      </DndProvider>

  );
}





export default App;
