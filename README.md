<p align="center">
    <img src="https://github.com/overshard/isaacbythewood.com/raw/master/public/static/favicon.png"
         width="200"
         height="200"
         alt="isaacbythewood.com Favicon" />
</p>

# Isaac Bythewood

The personal website of Isaac Bythewood, a Full-Stack Developer located in
Morganton, NC.

https://isaacbythewood.com/

## Clone

For any possible way of running this website yourself you'll need a copy of the
repo:

    git clone https://github.com/overshard/isaacbythewood.com.git

After you get the repo it's up to you how you want to use it.

## Development

You will need to have a version of `node` installed and `yarn`. If you already
have `node` but don't know if you have yarn you probably just have `npm` and
can install yarn with `npm i -g yarn`. After that you can run:

    yarn install
    yarn start

This will spin up isaacbythewood.com to run on port 8000 which you can access
via a browser at `http://localhost:8000`.

I won't really go into how to get `node` installed here, if you need help with
that feel free to submit an issue but the best place to start would be just
searching for `how to install node on <your operating system here>`. There are
plenty of great guides out there as it is very popular.

## Production

You can either push to [ZEIT](https://zeit.co/) with an update to the `now.json`
file to change the alias or install Docker and docker-compose and use that on
any server.

With docker appending `-d` to the end after `up` will run this container in
detached mode. We have `restart: always` configured so on system restarts or
crashes the container will start back up automatically.

    docker-compose up -d

## Ports

To change which ports things run on you can update the `package.json` file's
scripts. You will also need to update the `docker-compose.yml` file, if you use
that, to properly publish the new port.

## Troubleshooting

You may need to manually rebuild your docker container at times depending on
changes that have been made that may not automatically trigger a rebuild. To do
that you can run:

    docker-compose up -d --build

The `up` implies that you want to start the server again, `--build` will rebuild
the container and `-d`, as stated above, starts us in detached mode so you can
set it and forget it.
