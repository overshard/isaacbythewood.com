from django.template.response import TemplateResponse
from django.core.mail import EmailMessage


def home(request):
    context = {
        'submitted': False,
    }

    if request.method == 'POST':
        subject = 'Pony From isaacbythewood.com'
        message = request.POST['message']
        sender = 'robot@bythewood.me'
        recipient = ['isaac@bythewood.me']

        email = EmailMessage(subject, message, sender, recipient)
        email.send()
        
        context['submitted'] = True

    template = 'core/home.html'

    return TemplateResponse(request, template, context)
