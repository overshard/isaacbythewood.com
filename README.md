<p align="center">
    <img src="https://raw.githubusercontent.com/overshard/isaacbythewood.com/master/public/static/images/favicon.png"
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

This will spin up isaacbythewood.com to run on port 3000 which you can access
via a browser at `http://localhost:3000`.

I won't really go into how to get `node` installed here, if you need help with
that feel free to submit an issue but the best place to start would be just
searching for `how to install node on <your operating system here>`. There are
plenty of great guides out there as it is very popular.

## Production

I suggest pushing this code to [Vercel](https://vercel.com/) with an update to
the `vercel.json` file to change the alias for the easiest production
deployment.
