# Projects related to DOM

## Project link
[Click Here](https://stackblitz.com/edit/dom-project-chaiaurcode-fkydzj)

# Solution Code

## project1

```javascript
const body=document.querySelector("body")
const buttons=document.querySelectorAll(".button")

buttons.forEach( (button) => {
  button.addEventListener('click', (e) => {
    if (e.target.id==='grey'){
      body.style.backgroundColor=e.target.id
    }
    if (e.target.id==='white'){
      body.style.backgroundColor=e.target.id
    }
    if (e.target.id==='blue'){
      body.style.backgroundColor=e.target.id
    }
    if (e.target.id==='yellow'){
      body.style.backgroundColor=e.target.id
    }
  })
})

```

## project2

```javascript
const form=document.querySelector("form")

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const height=parseInt(document.querySelector("#height").value)
  const weight=parseInt(document.querySelector("#weight").value)
  const results=document.querySelector("#results")
  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi=(weight/((height*height)/10000)).toFixed(1)
    results.innerHTML=`<span>${bmi}</span>`
    if (bmi>24.9){
      results.innerHTML+="<br>You are over weight"
    } else if (bmi>18.6 && bmi<24.9){
      results.innerHTML+="<br>You are normal weight"
    } else {
      results.innerHTML+="<br>You are under weight"
    }
  }
  
});
```