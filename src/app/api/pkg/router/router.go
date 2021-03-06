package router

import (
	"net/http"

	"github.com/matryer/way"
)

// Mux contains the router.
type Mux struct {
	router *way.Router

	// CustomServeHTTP is a settable serve function.
	CustomServeHTTP func(w http.ResponseWriter, r *http.Request, status int, err error)
}

// New returns an instance of the router.
func New() *Mux {
	return &Mux{
		router:          way.NewRouter(),
		CustomServeHTTP: DefaultServeHTTP,
	}
}

// Instance returns the router.
func (m *Mux) Instance() *way.Router {
	return m.router
}

// ServeHTTP routes the incoming http.Request based on method and path
// extracting path parameters as it goes.
func (m *Mux) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	m.router.ServeHTTP(w, r)
}

// Param returns a URL parameter.
func (m *Mux) Param(r *http.Request, param string) string {
	return way.Param(r.Context(), param)
}
