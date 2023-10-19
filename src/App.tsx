import React from 'react';
import JokeList from './components/JokeList';
import JokeComponent from './components/JokeComponents';
import { Card, Space } from 'antd';

function App() {
  return (
    <section className='h-screen  w-screen py-10'>
      <JokeComponent/>
      <div className='w-[80%] h-[80%] mx-auto bg-gradient-to-t from-yellow-500 via-blue-300 to-red-700 via-pink-500 to-green-400 p-[3px] rounded-lg shadow-md'>
        <div className='w-full h-full bg-white rounded-lg'>
          <div>
            <p className='sm:text-lg md:text-xl xl:text-2xl text-indigo-700 font-serif font-normal text-center pt-5'>Jokes && Jokes</p>
          </div>
          <div className='p-10 '>
            <Card
            hoverable
            bordered
            bodyStyle={{
              width: 'fit-content',
            }}
            className='bg-indigo-400 drop-shadow-lg'
          >
            <Space
                direction='horizontal'
                size={'large'}
              >
                <div className='bg-gradient-to-t from-green-700 via-rose-500 to-sky-600 via-orange-700 to-purple-400 rounded-md shadow-md p-[3px]'>
                  <button className='bg-white drop-shadow-lg px-10 py-3 w-full h-full rounded-md active:bg-sky-400'>Fetch new jokes</button>
                </div>
                <div className='bg-gradient-to-t from-green-700 via-rose-500 to-sky-600 via-orange-700 to-purple-400 rounded-md shadow-md p-[3px]'>
                  <button className='bg-white drop-shadow-lg px-10 py-3 w-full h-full rounded-md active:bg-sky-400'>Clear jokes list</button>
                </div>
            </Space>
          </Card>
          </div>
        </div>
      </div>

    </section>
  )
}

export default App;
