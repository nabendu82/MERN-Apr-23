import React, { Component } from 'react'
import { UserConsumer } from './userContext'
import { ChannelConsumer } from './channelContext'

class Child extends Component {
    render() {
        return (
            <UserConsumer>
                {user => {
                    return (
                        <ChannelConsumer>
                            {channel => {
                                return (
                                    <>
                                        <h1>Channel is - {channel}</h1>
                                        <h2>User is {user}</h2>
                                    </>
                                )
                            }}
                        </ChannelConsumer>
                    )
                }}
            </UserConsumer>
        )
    }
}

export default Child