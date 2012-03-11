from django.template.response import TemplateResponse
from django.core.mail import EmailMessage
from django.contrib import messages
from django.http import HttpResponseRedirect
from django.core.urlresolvers import reverse


def home(request):
    template = 'core/home.html'
    context = None

    return TemplateResponse(request, template, context)


def contact(request):
    if request.method == 'POST':
        subject = 'Pony From isaacbythewood.com'
        message = request.POST['message']
        sender = 'robots@bythewood.me'
        recipient = ['isaac@bythewood.me']

        email = EmailMessage(subject, message, sender, recipient)
        email.send()
        
        messages.success(request, "<h1>The pony is on it's way!</h1> <p>No actual ponies were harmed in the sending of this message.</p>")
    else:
        messages.warning(request, "<h1>You're doing it wrong.</h1> <p>Please submit the form on the home page.</p>")

    return HttpResponseRedirect(reverse('core:home'))
