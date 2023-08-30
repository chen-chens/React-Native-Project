import React from 'react'
import { Card, TextInput, Button } from 'react-native-paper'
import { loginStyle } from './login.style'
import { SafeAreaView } from 'react-native'

export default function LoginPage(){

    return(
        <SafeAreaView style={loginStyle.content}>
            <Card mode="outlined" style={loginStyle.view}>
                <Card.Title title="My App" titleStyle={loginStyle.cardTitle} />
                <Card.Content>
                    <TextInput label="Email" keyboardType="email-address" contentStyle={loginStyle.textInput}></TextInput>
                    <TextInput label="Password" secureTextEntry={true} contentStyle={loginStyle.textInput}></TextInput>
                    <Button mode='contained' style={loginStyle.button}>Log In</Button>
                    <Button style={loginStyle.button}>Register</Button>
                </Card.Content>
            </Card>
        </SafeAreaView>
    )
}