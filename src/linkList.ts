
///////////////////////////////////////////////////////////////////////////////////////////////////////




interface Mon<T>
{
    __Path : T
}

export type test  = IFinancialProductSchema<{documentRequirements:{documentType:'ref'}}>

interface Base<A,B>
{

}
 function FunParam<T extends string>(param: T) : void
{
    return 1 as any as void;
}

interface Depths
{
    '0' : '1',
    '1' : '2',
    '2' : '3',
    '3' : '4',
    '4' : '5',
    '5' : '6',
    '6' : '7',
    '7' : '8',
    '8' : '9',
    '9' : '10',
}

//type TransformRaw<O, V, Depth> = T
// required to know which path to start from
// can do incremental passing, until the last one, then the last pass stips all un expaned refs.
//
interface MonCtrl {
   pop : IterShape
}

interface MonCtrlSeed extends MonCtrl
{
    pop : Iter<'never',never,'E'>
}

interface Mon<Ctrl extends MonCtrl = MonCtrlSeed>
{
    ___Ctrl : Ctrl;
    //populate<T extends string> (index : T, item :'A') : Mon<B>
    //populate<T extends string> (index : T) : Mon<{pop:Iter<T,MonCtrl['pop'], 'E'>}>
   //populate<T extends string> (index : T, b : 'R') : Mon<{pop:Iter<T,MonCtrl['pop']>}>
    populate<T extends string, R extends 'R'> (index : T, r : R) : Mon<{pop:Iter<T,Ctrl['pop']>}>
    populate<T extends string> (index : T) : Mon<{pop:Iter<T, Ctrl['pop']>}>
    //populate<KeyA extends string> (keyA : KeyA, keyB : KeyB) : {KeyA : KeyA}

}
// I can wrap things, but then they going to be in the reverse order, which means I need to get them
// in the right order.


const mongo : Mon;
const rr = mongo.populate('A').populate('B').populate('C').populate('A','R').populate('J').populate('K');
type uu = typeof rr;
type izii = uu['___Ctrl']
type mm = Reverse<izii['pop']>;
let teststet : mm;
teststet = 'sd'

type chain = Iter<'A',IterEnd<'B'>>

const testChain : chain;
testChain.Iter.Iter

type IterEnd<K extends string> = Iter<K,never,'E'>
type IterShape = Iter<any, any, any> | never
interface Iter<K extends string, I extends IterShape, C extends 'I' | 'E' = 'I'> {
    Key : K,
    Iter: I
    Ctrl : C
}


type Reverse<T extends Iter<any,any>, Accum extends Iter<any,any,any> = never, C extends 'I' | 'E' = 'E'> = (
{
    [K in keyof T] :    
    ({
        E : Iter<T['Key'], Accum, 'I'>
    }&{
        I: Reverse<T['Iter'], Iter<T['Key'], Accum, C>,'I'>
    })[T['Ctrl']]
})['Iter']

// How do I pick the slots for this..
// MM basically control stucture could be 0 one element iterate, 1, two elements, 3 elements.
// when I hit and end then, I need to reset the accumulate to the route,
// but typically for doing this at populate time, it is in reverse,
// and the only way to populate that structure is reverse it and then attempt to popylate it.
// clearly the simple wrapping populating doesn't work. we require a more sofisticate one.
// which is what we required.
// needs a method to populate iterms correctly around to there key, basically insertion sort is what is reqquired.
// insertion sort is basically same things is what to do the aggreate routine, how every we would be processing massive
// iter list in one go.

type IterTreeShape = IterTree<any,any,any,any,any>
interface IterTree<K extends string | undefined, I extends IterTreeShape, B extends IterTreeShape, P extends IterTreeShape, C extends 'I' | 'E' | 'T' | 'S' = 'I'> {
    Key : K
    Iter: I
    IterB: B
    Ctrl : C
    IterP : P
}


// results my iteration accumulate to the route of the tree.
// typically I can only use the builder pattern here.
// which means I need parent referance, so that I can walk back to the route of the tree
// to start again, as refernce will be out of date, as copy on write.


type InsertTree<K extends string, Iter extends IterTreeShape, Accum extends IterTreeShape = never, Ctrl extends 'I' | 'R' = 'I'> = (
{
    R : Accum // iterate out to the route potentially.
}
&
{
    I : [K in keyof Accum] : ({
        T : 'T' //compare split or insert
            Accum['Key'] extends K ?
                InsertTree<K,Iter['Iter'], Accum,''>
                : // we need to now split and insert.
                InsertTree<K,

        S : 'S' // compare and split or insert
        E : 'E'  // required to insert the new item.
        I : 'I'  // compare split or insert
    })[Accum['Ctrl']]

  

})[Ctrl]
    /*

type Aggregate<T extends Iter<any,any>, Accum extends IterTreeShape = never, C extends 'I' | 'E' = 'E'> = (
{
    [K in keyof T] :    
    ({
        // Reset to the route
        E : Iter<T['Key'], Accum, 'I'>
    }&{
        // keep processing in a forward order.
        I: //Reverse<T['Iter'], Iter<T['Key'], Accum, C>,'I'>
        ({
          
            S : Accum['']
            I :'G'
            T : Accum['Key'] extends T['Key'] ? 'A' : 'B'

        })[Accum['Ctrl']]

    })[T['Ctrl']]
})['Iter']
/*
type Keys<T extends Record<string,any> =
{
    [K in keyof T] : {
        Eval : {T['Key']:Keys}}

    }['Item']
  
}['Item']*/
// type Reverse<T extends Iter<any,any>, Accum = {}> =
// {
//     [K in keyof T] : K extends 'Iter' ?
//         T[K] extends Record<string,any> ?
//             Reverse<T[K],{Key:T['Key'], Item : Accum}>
//             : {Key:T['Key'], Item : Accum}
//         : never
// }


type res = Reverse<Reverse<chain>>
const res : res;
res.Iter.

/*
type Reverse<T extends Record<string, any>, Accum = {}> =
{
    [K in keyof T] : Reverse<T[K] & {Accum :T['Key']}>
}['Accum']
*/

I3
{
    Key :
    Iter : {
        ISO_8601I
        IterA : IterAA
                :
        IterB : IterB
    }
}
1 - /
    \

2 - /
    \

3 - /
    \

const test : Mon<void>;

test.populate('field1').

// class Mon//<Schema extends Record<string,any>, Depth extends keyof Depths>
// {
//     //populate<T extends string> (index : T, item :'I') : void
//     populate<T extends string> (index : T, item : any) : void
//     {}
//     //Mon<Transform<Schema,T>, Item extends 'B' ? '0' : Depths[Depth]>
  
// }



type Keys = {
    __Path : 'A'
}
&
{
    __Path : 'B'
}
&
{
    __Path : 'C'
}

type ExtractValue<T> = (
{
    [K in keyof T] : T[K]
})[keyof T]

type uuu = ExtractValue<Keys>

type extractFirst<T> = T extends (infer A & infer B) ? A : 'B'

type iii = extractFirst<'A' & 'B'>



//XObject<If<StringEq<this['__ID'],'K'>, this['__tsType'] & K ,K>, R, N, 'K','P'> & Joi.ObjectSchema

const mon = new Mon<FunParam<'T'>>();
const r = mon.populate('A').populate('B').populate('C')

type rr = typeof r;

