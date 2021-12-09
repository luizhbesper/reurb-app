import React, {useState} from 'react'
import Container from './style'
import Select from 'react-select-v2';
import {InputRegister, NextButton} from '../style'


export default function index() {
    const [options, ] = useState([
        { value: 'op1', label: 'Opcao 1' },
        { value: 'op2', label: 'Opcao 2' },
        { value: 'op3', label: 'Opcao 3' }
    ])

    return (
        <Container>
            <h3>Novo Registro de Regularização</h3>
            <InputRegister>
                <span className = "label">Tipo de regualarização</span>
                <Select
                    options={options}
                    defaultInputValue="Selecionar"
                    className = "input"
                />
            </InputRegister>
            <InputRegister>
                <span className = "label">Cidade</span>
                <Select
                    options={options}
                    defaultInputValue="Selecionar"
                    className = "input"
                />
            </InputRegister>
            <InputRegister>
                <span className = "label">Programa</span>
                <Select
                    options={options}
                    defaultInputValue="Selecionar"
                    className = "input"
                />
            </InputRegister>
            <NextButton>Iniciar Processo</NextButton>
        </Container>
    )
}
