from django.template.response import TemplateResponse
from django.core.mail import send_mail


def home(request):
    context = {
        'submitted': False,
    }

    if request.method == 'POST':
        subject = 'Pony From isaacbythewood.com'
        message = request.POST['message']
        sender = 'Robot <robot@bythewood.me>'
        recipient = ['isaac@bythewood.me']

        # send_mail is deprecated and I need to start using EmailMessage instead
        send_mail(subject, message, sender, recipient)
        
        context['submitted'] = True

    template = 'core/home.html'

    return TemplateResponse(request, template, context)
