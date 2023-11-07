import './SortingVisualizer.css';
import React from 'react';
import { PRIMARY_COLOR, randomNumberFrom } from './utils';
import {mergeSort} from './MergeSort';
import { quickSort } from './QuickSort';
import { selectionSort } from './SelectionSort';
import { bubbleSort } from './BubbleSort';
import { insertionSort } from './InsertionSort';

const NUMBER_OF_ARRAY_BARS = 50;

export default class SortingVisualizer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            array : [],
        };
    }

    componentDidMount() {
        this.resetArray();
    }

    resetArray() {
        const array = [];
        for(let i = 0; i < NUMBER_OF_ARRAY_BARS; i++)
            array.push(randomNumberFrom(5, 500));
        this.setState({array});
        let elem = document.querySelectorAll('.array-bar');
		for (let i = 0; i < elem.length; i++) {
			elem[i].style.backgroundColor = PRIMARY_COLOR;
		}
    }

    render() {
        const {array} = this.state;

        return (
            <div className='array-container'>
                <div className='array-heading'>Sorting Algorithm Visualizer</div>
                {array.map((value, idx) => (
                    <div className='array-bar' key = {idx} style={{height:`${value}px`, backgroundColor: PRIMARY_COLOR}}></div>
                ))}
                <button className = 'array-btn-generate' onClick={() => {this.resetArray()}} type="button">Generate New Array</button>
                <button className = 'array-btn-sort' onClick={mergeSort} type="button">Merge Sort</button>
                <button className = 'array-btn-sort' onClick={quickSort} type="button">Quick Sort</button>
                <button className = 'array-btn-sort' onClick={selectionSort} type="button">Selection Sort</button>
                <button className = 'array-btn-sort' onClick={bubbleSort} type="button">Bubble Sort</button>
                <button className = 'array-btn-sort' onClick={insertionSort} type="button">Insertion Sort</button>
            </div>
        );
    }
}


