export default function generate():string{
    const symbols="1234567890qwertyuiopasdfghjklzxcvbnm";
    let ans='';
    for(let i=0;i<10;i++){
        ans=ans+symbols[Math.floor(Math.random()*symbols.length)]
    }
    console.log(ans);
    return ans;
}