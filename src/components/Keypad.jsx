import './Keypad.css'
import Keys from './Keys.jsx';
import { evaluate } from 'mathjs';

function Keypad({display,setDisplay}){
    const Calc = {
        Numbers : (e) => {
            const Num = e.target.value;
            setDisplay(prev => prev + Num)
        },
        Operation: (e) => {
            const op = e.target.value;
            setDisplay(prev => prev + op);
        },
        Clear : () => {
            setDisplay(prev => prev.slice(0,-1));
        },
        Symbol : () => {
            setDisplay(prev => prev + ".");
        },
        AllClear : () => {
            setDisplay('');
        },
        Calculate : () => {
            try {
                const expression = display
                .replace(/x/g, '*')
                .replace(/exp/g, '**')
                .replace(/%/g, '/100');

                const result = evaluate(expression); 
                setDisplay(result.toString());
            } catch {
                const message = "Error";
                setDisplay(message);
            }
        }
    };

    return(
        <div>
            <Keys Calc={Calc}/>
        </div>
    )
}

export default Keypad;