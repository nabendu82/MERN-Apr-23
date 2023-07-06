import React from 'react'

const ChannelContext = React.createContext()

const ChannelProvider = ChannelContext.Provider
const ChannelConsumer = ChannelContext.Consumer

export { ChannelProvider, ChannelConsumer }