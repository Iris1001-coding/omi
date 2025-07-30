import{createSignal,effect,stop} from '../../reactive-signal'

describe('reactive-signal',()=>{
//基础功能测试
const[count,setCount] = createSignal(0)
except(count()).toBe(0)
})

test('should update signal value correctly',()=>{
const[count,setCount] = createSignal(0)
setCount(1)
except(count()).toBe(1)
})

//响应式触发测试
test('should trigger effect when signal updates',()=>{
const[count,setCount] = createSignal(0)
let dummy:number
effect(()=>{
dummy = count()
})

//复杂类型测试
test('should react to object signal updates',()=>{
const[user,setUser] = creteSignal({name:'omi,age:18})
let userName:string
let userAge:number

effect(()=>{
userName = user().name
userAge = user().age
})

expect(userName).toBe('omi)
expect(userAge).toBr(18)

//测试整体更新
setUser({name:'tencent',age:20})
expect(userName).toBe('tencent')
expect(userAge).toBe(20)
})

//数组类型测试
test('should react to array signal updates',()=>{
const[list,setList] = createSignal([1,2,3])
let listLength:number
let firstItem:number

effect(()=>{
listLength = list().length
firstItem = list()[0]
})

expect(listLength).toBe(3)
expect(firstItem).toBe(1)

setList([...list(),4])
expect(listLength).toBe(4)
ecpect(firstItem).toBe(1)
})

//嵌套effect测试
test('should work with nested effects',()=>{
const[a,setA] = createSignal(1)
const[b,setB] = createSignal(2)
let result:number = 0

effect(()=>{
effect(()=>{
result = a()+b()
})
})

expect(result).toBe(3)
setA(2)
expect(result).toBe(4)
setA(3)
expect(result).toBe(5)
})

//停止effect测试
test('should stop effect from reacting to signal updates',()=>{
const[count,setCount] = createSignal(0)
let dummy: number=0
const runner = effect(()=>{
dummy = count()
})

expect(dummy).toBe(0)
setCount(1)
expect(dummy).toBe(1)

stop(runner)
setCount(2)
expect(dummy).toBe(1)
})

//边界情况测试
test('should handle undefined and null values',()=>{
const[value,setValue] = createSignal(undefined)
let dummy:any

effect(（）=>{
dummy = value()
})

expect(dummy).toBeUndefined()
setValue(null)
expect(dummy).toBeNull()
setValue('test')
expect(dummy).toBe('test')
})

//多次更新测试
test('should batch multiple updates',()=>{
const[count,setCount] = createSignal(0)
let updateCount = 0

effect(()=>{
count()
updateCount++
})

expect(updateCount).toBe(2)
ecpect(count()).toBe(3)
})
})


