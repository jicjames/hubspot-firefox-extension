# Overview

This is a simple, unpublished FIREFOX extension to replicate the "cache busting" feature of the [HubSpot Developer Extension](https://github.com/TheWebTech/HubSpot-Developer-Extension/) for Google Chrome. 

The only functionality this extension has is to reload the page with a `hsCacheBust` query parameter, forcing HubSpot to serve an uncached version on the page. This is useful for development as sometimes the HubSpot cache can be very over-aggressive. 

Because it is unpublished, you will need to side-load the extension into your firefox browser (and reload it every time you restart the browser). See instructions below.

# Installation

Clone the repository to your machine. 

In firefox, go to the ["This Firefox"](about:debugging#/runtime/this-firefox) Page.

Under "Temporary Extensions", click the "Load Temporary Add-on" button and select the `manifest.json` file in your local version of this repository.

![image](https://user-images.githubusercontent.com/6244979/128598513-1ba441b8-0c44-4ef3-b4fb-1b94e463c08c.png)

![image](https://user-images.githubusercontent.com/6244979/128598520-75355e56-cb16-4bda-9f31-8278e38b8ac8.png)


The addon Icon should appear in your browser addon toolbar.

# Usage

To use the extension, simply click on the icon. The page will be reloaded with a `?hsCacheBust=1234` parameter (with random number).

![image](https://user-images.githubusercontent.com/6244979/128598552-57790eed-a73d-4e34-bd88-b05d453dc92c.png)

