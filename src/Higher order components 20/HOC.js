import React from 'react'
import './HOC.scss';

//HOC(Higher Order Components),It takes one or more components as a argument and do some logical operations that is common between two or more components and finally returns a componenent.

const HOC = (WrapperComp,entity) => {
    return class extends React.Component{
        state={
            data:[],
            term:""
        }
    
    componentDidMount(){
           const fetchData=async()=>{
            const response = await fetch(`https://jsonplaceholder.typicode.com/${entity}`)
            const responseJson = await response.json();
            this.setState({...this.state,data:responseJson})
            console.log("data",responseJson)
           }
           fetchData();
        }

        render(){
            let {term,data}=this.state;
            let filteredData=data.slice(0,10).filter((d)=>{
                if(entity==="users"){
                    let {name}=d;
                    return name.toLowerCase().indexOf(term.toLowerCase())>=0;
                }
                if(entity==="todos"){
                    let {title}=d;
                    return title.toLowerCase().indexOf(term.toLowerCase())>=0;
                }
            })
      
    
      return (
        <div>
            HOC
            {entity}<br/>
            <input type="text" value={term} onChange={(e)=>this.setState({...this.state,term:e.target.value})}/>
            <WrapperComp data={filteredData} ></WrapperComp>
    
        </div>
      )

    }
}
    
}

export default HOC