FROM mcr.microsoft.com/dotnet/sdk:10.0 AS build
WORKDIR /App

COPY . ./

RUN dotnet restore
RUN dotnet publish

FROM mcr.microsoft.com/dotnet/aspnet:10.0
WORKDIR /App

COPY --from=build /App/PatoDraw.Api/bin/Release/net10.0/publish/ ./Api
COPY --from=build /App/PatoDraw.DbMigrations/bin/Release/net10.0/publish/ ./DbMigrations

WORKDIR /App/Api
ENTRYPOINT ["dotnet", "PatoDraw.Api.dll"]
