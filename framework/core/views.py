from django.template.response import TemplateResponse
from django.core.mail import EmailMessage
from django.contrib import messages


def home(request):
    if request.method == 'POST':
        subject = 'Pony From isaacbythewood.com'
        message = request.POST['message']
        sender = 'robot@bythewood.me'
        recipient = ['isaac@bythewood.me']

        email = EmailMessage(subject, message, sender, recipient)
        email.send()
        
        messages.success(request, "<h1>The pony is on it's way!</h1> <p>No actual ponies were harmed in the sending of this message.</p>")

    template = 'core/home.html'

    context = None

    return TemplateResponse(request, template, context)
