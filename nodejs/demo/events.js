const EventEmitter = require('events')

// const emitter = new EventEmitter()
//
// emitter.on('anything',data => {
//     console.log('On: anything',data)
// })
// emitter.emit('anything',{a:1})
// emitter.emit('anything',{b:2})
//
// setTimeout(()=>{
//     emitter.emit('anything',{c:3})
// },1000)
//
// class Dispatcher extends EventEmitter {
//     subscrbe(eventName,cb) {
//         console.log('Subscribe')
//         this.on(eventName,cb)
//     }
//     dispatch(eventName,data) {
//         console.log('Dispatching')
//         this.emit(eventName,data)
//     }
// }
// const dis = new Dispatcher()
// dis.subscrbe('aa',data => {
//     console.log('On : aa ' , data)
// })
// dis.dispatch('aa',{aa:123})