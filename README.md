
# Implementing a application to study strategy design pattern

This app is an example of Implementing of the design pattern strategy, that is used to solve some problems that we need to apply some logic but only if the context is valid to run that logic.   
In this application I created an API that with the information of weather, track humidity, position of car and other data the API sends back a car object with a tire option to the race.



## Links
- [Refactor Guru - Strategy Design Pattern:](https://refactoring.guru/design-patterns/strategy)
## How to Run

#### Return the car with the correct tire to run 

```http
  POST /select-tire
```
##### Body
```json
"context": {
		"wheater": "SUNNY",
		"humidity": 50,
		"temperature": 40,
		"car": {
			"scuderia": "ferrari",
			"tire": "",
			"driver": "Vettel",
			"position": 10
		}
	}
```


## Rodando localmente

Clone o projeto

```bash
  git clone https://github.com/odevjunior/implementing-strategy-pattern.git
```

Entre no diretório do projeto

```bash
  cd implementing-strategy-pattern
```

Instale as dependências

```bash
  yarn install
```

Inicie o servidor

```bash
  yarn start
```

