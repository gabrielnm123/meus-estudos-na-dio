FROM golang as exec

COPY app.go /go/src/app/

# serve pra não aconteça o erro abaixo
# go: go.mod file not found in current directory or any parent directory; see 'go help modules'
ENV GO111MODULE=auto

WORKDIR /go/src/app/

RUN go build -o app.go .

FROM alpine

WORKDIR /appexec

COPY --from=exec /go/src/app /appexec

RUN chmod -R 755 /appexec

ENTRYPOINT [ "./app.go" ]