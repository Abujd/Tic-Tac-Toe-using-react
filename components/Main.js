import React from 'react'
import { useState } from "react"
import { useEffect } from "react"
import Cell from './cell'
import styles from './board.module.css'

let initialArr = ['', '', '', '', '', '', '', '', ''];


export default function Main() {

    const [movement, setMovement] = useState(initialArr);
    const [played, setPlayed] = useState(false);
    const [winngMsg, setWinningMsg] = useState(false);

    const handleClick = (index) => {
        let arrayCopy = Array.from(movement);

        if (arrayCopy[index]) {  //if user click twice on any square then return
            return;
        }

        arrayCopy[index] = played ? 'X' : 'O';
        if (played) {
            setPlayed(false);
        } else {
            setPlayed(true);
        }
        setMovement(arrayCopy);
        console.log("arrayCopy",arrayCopy.length);

    }

    useEffect(() => {
        let winner = checkWinner();
        if (winner) {
            setWinningMsg(true);
        }
    });

    const checkWinner = () => {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];

            if (movement[a] && movement[a] == movement[b] && movement[a] == movement[c]) {
                return movement[a]

            }
        }
        return null;
    }

    const onResetGame = () => {
        setMovement(initialArr);
        setWinningMsg(false);
    }

    return (
        <>
            <section className='bg-[#020c1b]'>
                <div className='py-[100px] relative'>
                    <div className='text-[#FFFFFF] text-[34px] font-bold leading-[20px] tracking-[2px] pb-[70px]'>React - Tic Tac Toe using Hooks</div>
                    <div className='flex justify-center pt-[20px]'>
                        <div className="cursor-pointer" onClick={() => handleClick(0)} >
                            <Cell cssClass={styles.firstCell} state={movement[0]} />
                        </div>
                        <div className="cursor-pointer" onClick={() => handleClick(1)}>
                            <Cell cssClass={styles.firstCell} state={movement[1]} />
                        </div>
                        <div className="cursor-pointer" onClick={() => handleClick(2)}>
                            <Cell cssClass={styles.lastCell} state={movement[2]} />
                        </div>
                    </div>
                    <div className='flex justify-center'>
                        <div className="cursor-pointer" onClick={() => handleClick(3)}>
                            <Cell cssClass={styles.firstCell} state={movement[3]} />
                        </div>
                        <div className="cursor-pointer" onClick={() => handleClick(4)} >
                            <Cell cssClass={styles.firstCell} state={movement[4]} />
                        </div>
                        <div className="cursor-pointer" onClick={() => handleClick(5)}>
                            <Cell cssClass={styles.lastCell} state={movement[5]} />
                        </div>
                    </div>
                    <div className='flex justify-center'>
                        <div className="cursor-pointer" onClick={() => handleClick(6)}>
                            <Cell cssClass={styles.lastColCell} state={movement[6]} />
                        </div>
                        <div className="cursor-pointer" onClick={() => handleClick(7)}>
                            <Cell cssClass={styles.lastColCell} state={movement[7]} />
                        </div>
                        <div className="cursor-pointer" onClick={() => handleClick(8)}>
                            <Cell state={movement[8]} />
                        </div>
                    </div>
                    {winngMsg &&
                        <div className='absolute z-[10] top-[200px] right-[475px]'>
                            <div className='p-[100px] bg-[#ffffff]'>
                                <div className='text-[20px] text-[#000000] font-bold'>
                                    <div className='mb-[30px]'>
                                        Yeahhh ! You won this Game  &#127881; &#127882;
                                    </div>
                                <div>
                                    <button className='px-[50px] py-[10px] text-[#000000] border-2 border-[#000000] rounded-[10px] z-[100]' onClick={onResetGame}>Reset</button>
                                </div>
                                </div>
                            </div>
                        </div>
                    }

                </div>
            </section>
        </>
    )
}