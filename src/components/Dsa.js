import React from 'react'
import Textarea from './Textarea'
const mystyle={
  margin:"74px 0px 20px 0px"
}
export default function Dsa() {
  return (
    <div style={mystyle}>
<div className='text-center container mt-5'>
    <strong>Normal search in array (c++)</strong>
<Textarea  h={"500px"}code={`  int main()
{
    int arr[]={1,2,3,4,5};
    int find;
    int count=0;
    int size=sizeof(arr)/sizeof(int);
    cin>>find;
    for(int i=0;i<size;i++){
        if(arr[i]==find){
            cout<<"yes number was here in index no "<<i<<endl;
            count++;
            break;
        }
    }
    if(count==0){
        cout<<"Not found"<<endl;
    }
    return 0;
}`}/>
</div>
<div className='text-center container mt-5'>
    <strong>Normal search in array (java)</strong>
<Textarea  h={"500px"}code={`  import java.util.Scanner;
public class Main
{
	public static void main(String[] args) {
		
		int arr[]={1,2,3,4,5};
    int find;
    int count=0;
    int size=arr.length;
    Scanner sc =new Scanner(System.in);
    find=sc.nextInt();
    
    for(int i=0;i<size;i++){
        if(arr[i]==find){
            System.out.println("yes number was here in index no "+i);
            count++;
            break;
        }
    }
    if(count==0){
      System.out.println("Not found");
    }
	}
}
`}/>
</div>
<div className='text-center container mt-5'>
    <strong>Normal search in array (C)</strong>
<Textarea  h={"500px"}code={` int main()
{
    int arr[]={1,2,3,4,5};
    int find;
    int count=0;
    int size=sizeof(arr)/sizeof(int);
    scanf("%d",&find);
    for(int i=0;i<size;i++){
        if(arr[i]==find){
            printf("yes number was here in index no %d \n",i);
            
            count++;
            break;
        }
    }
    if(count==0){
        printf("Not found");
    }
return 0;
}

`}/>
</div>
<div className='text-center container mt-5'>Comming soon all part related to dsa</div>
    </div>
    
  )
}
