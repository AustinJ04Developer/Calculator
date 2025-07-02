function Keys(props){
    const {Calc} = props;
    const {Numbers,Operation,Clear,AllClear,Symbol,Calculate} = Calc;
    return(
        <div className='keys'>
            <div className="dv">
                <button className='buttonoperator' value="^" onClick={Operation}>^</button>
                <button className='buttonoperator' value="%" onClick={Operation}>%</button>
                <button className='buttonclear' value="C" onClick={Clear}>C</button>
                <button className='buttonallclear' value="AC" onClick={AllClear}>AC</button>
            </div><br />
            <div className="dv">
                <button className='button' value="7" onClick={Numbers}>7</button>
                <button className='button' value="8" onClick={Numbers}>8</button>
                <button className='button' value="9" onClick={Numbers}>9</button>
                <button className='buttonoperator' value="/" onClick={Operation}>/</button>
            </div><br />
            <div className="dv">
                <button className='button' value="4" onClick={Numbers}>4</button>
                <button className='button' value="5" onClick={Numbers}>5</button>
                <button className='button' value="6" onClick={Numbers}>6</button>
                <button className='buttonoperator' value="x" onClick={Operation}>x</button>
            </div><br />
            <div className="dv">
                <button className='button' value="1" onClick={Numbers}>1</button>
                <button className='button' value="2" onClick={Numbers}>2</button>
                <button className='button' value="3" onClick={Numbers}>3</button>
                <button className='buttonoperator' value="-">-</button>
            </div><br />
            <div className="dv">
                <button className='button' value="0" onClick={Numbers}>0</button>
                <button className='buttonsymbol' value="." onClick={Symbol}><b>.</b></button>
                <button className='buttonequal' value="=" onClick={Calculate}><b>=</b></button>
                <button className='buttonoperator' value="+" onClick={Operation}>+</button>
            </div>
        </div>
    )
}

export default Keys;