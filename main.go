package main

import (
	"context"
	"fmt"
	"log"
	"net/http"
	"text/template"

	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

var plantillas = template.Must(template.ParseGlob("plantillas/*"))

func main() {

	// Conectarse a la base de datos
	client, err := ConnectDB()
	if err != nil {
		log.Fatal(err)
	}
	defer client.Disconnect(context.TODO())

	// Comprobar la conexión
	err = client.Ping(context.TODO(), nil)
	if err != nil {
		log.Fatal(err)
	}

	fmt.Println("Conexión exitosa a MongoDB!")

	http.HandleFunc("/", Inicio)
	http.HandleFunc("/crear", Crear)

	fmt.Println("Servidor corriendo")
	http.ListenAndServe(":8080", nil)

	defer CloseDB(client)
}

// ConnectDB establece la conexión a la base de datos MongoDB y devuelve el cliente
func ConnectDB() (*mongo.Client, error) {
	// Configurar la conexión a la base de datos
	clientOptions := options.Client().ApplyURI("mongodb://localhost:27017")

	// Conectarse a la base de datos
	client, err := mongo.Connect(context.TODO(), clientOptions)
	if err != nil {
		return nil, err
	}

	return client, nil
}

// CloseDB cierra la conexión a la base de datos MongoDB
func CloseDB(client *mongo.Client) error {
	err := client.Disconnect(context.TODO())
	if err != nil {
		return err
	}

	fmt.Println("Conexión cerrada.")

	return nil
}

func Inicio(w http.ResponseWriter, r *http.Request) {
	//fmt.Fprint(w, "Hola mundo soy golang")
	plantillas.ExecuteTemplate(w, "inicio", nil)
}

func Crear(w http.ResponseWriter, r *http.Request) {
	plantillas.ExecuteTemplate(w, "crear", nil)
}
